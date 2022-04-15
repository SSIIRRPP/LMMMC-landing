import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";
import { ReactComponent as TimeIcon } from "../assets/icons/schedule.svg";
import { ReactComponent as RadioIcon } from "../assets/icons/radio.svg";
import { ReactComponent as SecurityIcon } from "../assets/icons/support.svg";
import { ReactComponent as CompassIcon } from "../assets/icons/explore.svg";
import { ReactComponent as HeadsetIcon } from "../assets/icons/headset.svg";
import { ReactComponent as SwapIcon } from "../assets/icons/swap.svg";
import { ReactComponent as SailingIcon } from "../assets/icons/sailing.svg";

export const checkIcon = (name, _props = {}) => ({
  name,
  icon: <CheckIcon {..._props} />,
});

export const timeIcon = (name, _props = {}) => ({
  name,
  icon: <TimeIcon {..._props} />,
});

export const radioIcon = (name, _props = {}) => ({
  name,
  icon: <RadioIcon {..._props} />,
});

export const securityIcon = (name, _props = {}) => ({
  name,
  icon: <SecurityIcon {..._props} />,
});

export const compassIcon = (name, _props = {}) => ({
  name,
  icon: <CompassIcon {..._props} />,
});

export const headsetIcon = (name, _props = {}) => ({
  name,
  icon: <HeadsetIcon {..._props} />,
});

export const swapIcon = (name, _props = {}) => ({
  name,
  icon: <SwapIcon {..._props} />,
});

export const sailingIcon = (name, _props = {}) => ({
  name,
  icon: <SailingIcon {..._props} />,
});
