import { useEffect, useState } from "react";
import { Option, OptionWithId } from "./types";
import { getRandomID } from "./utils";

export function useOptionsWithIds(options: Option[]) {
  const [optionsWithIds, setOptionsWithIds] = useState<OptionWithId[]>([]);

  useEffect(() => {
    const newOptions: OptionWithId[] = [];
    const newOptionsIds: string[] = [];

    const minNumCharacters = Math.ceil(Math.log2(options.length));

    options.forEach((option: Option) => {
      const optionId = getRandomID(newOptionsIds, minNumCharacters);
      newOptionsIds.push(optionId);
      newOptions.push({
        ...option,
        id: optionId
      });
    });

    setOptionsWithIds(newOptions);
  }, [options]);

  return optionsWithIds;
}
