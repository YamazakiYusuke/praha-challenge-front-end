import { useState, useEffect } from 'react';

export enum BreakpointValues {
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
  XXL = 1536,
}

export class WindowSize {
  constructor(private width: number) {}

  isSM(): boolean {
    return this.width >= BreakpointValues.SM && this.width < BreakpointValues.MD;
  }

  isMD(): boolean {
    return this.width >= BreakpointValues.MD && this.width < BreakpointValues.LG;
  }

  isLG(): boolean {
    return this.width >= BreakpointValues.LG && this.width < BreakpointValues.XL;
  }

  isXL(): boolean {
    return this.width >= BreakpointValues.XL && this.width < BreakpointValues.XXL;
  }

  isXXL(): boolean {
    return this.width >= BreakpointValues.XXL;
  }

  moreThan(breakpoint: BreakpointValues): boolean {
    return this.width >= breakpoint;
  }

  lessThan(breakpoint: BreakpointValues): boolean {
    return this.width < breakpoint;
  }
}

const useWindowSize = () => {
  const [breakpoint, setBreakpoint] = useState<WindowSize>(new WindowSize(BreakpointValues.LG));

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(new WindowSize(window.innerWidth));
    };

    handleResize(); // 初期サイズを設定
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};

export default useWindowSize;