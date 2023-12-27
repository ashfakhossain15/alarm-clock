"use client";

import { useClock } from "@/app/hooks/useClock";
import React, { useEffect, useState } from "react";
type Props = {};

const Clock = (props: Props) => {
  const { time } = useClock();

  return (
    <div>
      <h1 className="flex gap-3">
        <span>{time}</span>
      </h1>
    </div>
  );
};

export default Clock;
