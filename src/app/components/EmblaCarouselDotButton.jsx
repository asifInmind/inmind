"use client";
import React, { useCallback, useEffect, useState } from "react";

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Helper function to safely get snaps depending on Embla version
  const getSnaps = useCallback((api) => {
    if (!api) return [];
    if (typeof api.scrollSnapList === "function") return api.scrollSnapList();
    if (typeof api.snapList === "function") return api.snapList();
    return [];
  }, []);

  // Helper function to safely get selected index depending on Embla version
  const getSelectedIndex = useCallback((api) => {
    if (!api) return 0;
    if (typeof api.selectedScrollSnap === "function")
      return api.selectedScrollSnap();
    if (typeof api.selectedSnap === "function") return api.selectedSnap();
    return 0;
  }, []);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return; // ✅ guard
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(
    (api) => {
      setSelectedIndex(getSelectedIndex(api));
    },
    [getSelectedIndex],
  );

  const onInit = useCallback(
    (api) => {
      setScrollSnaps(getSnaps(api));
      setSelectedIndex(getSelectedIndex(api));
    },
    [getSnaps, getSelectedIndex],
  );

  useEffect(() => {
    if (!emblaApi) return;

    // CRITICAL: Force immediate state generation on mount/api change
    onInit(emblaApi);

    // Bind event listeners for subsequent changes
    emblaApi.on("init", onInit);
    emblaApi.on("reinit", onInit);
    emblaApi.on("select", onSelect);

    // Cleanup listeners
    return () => {
      emblaApi.off("init", onInit);
      emblaApi.off("reinit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export const DotButton = (props) => {
  const { children, className = "", ...restProps } = props;

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center p-0 m-0 cursor-pointer border-0 bg-black rounded-full ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default useDotButton;
