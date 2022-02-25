import {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import React from "react";

const Backdrop = props => {
  return (
    <BottomSheetBackdrop
      {...props}
      pressBehavior={"close"}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
    />
  );
};

export default Backdrop;
