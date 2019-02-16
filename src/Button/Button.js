import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from "carbon-components-react";
import * as Icons from "carbon-icons/dist/carbon-icons.js";

/**
 * This is an array of keys from the Icon object from the carbon-icons library.
 * Names are used to access Icon objects imported from the library.
 */
const ICONS = [
  "iconAdd",
  "iconAddGlyph",
  "iconAddOutline",
  "iconAddSolid",
  "iconApi",
  "iconApis",
  "iconAppServices",
  "iconApplications",
  "iconApps",
  "iconArrowDown",
  "iconArrowLeft",
  "iconArrowRight",
  "iconArrowUp",
  "iconArrows",
  "iconAsleep",
  "iconAsleepGlyph",
  "iconAttachment",
  "iconAwake",
  "iconBackToTop",
  "iconBlockChain",
  "iconCalendar",
  "iconCaretDown",
  "iconCaretLeft",
  "iconCaretRight",
  "iconCaretUp",
  "iconCfApps",
  "iconChat",
  "iconCheckmark",
  "iconCheckmarkGlyph",
  "iconCheckmarkOutline",
  "iconCheckmarkSolid",
  "iconChevronDown",
  "iconChevronLeft",
  "iconChevronRight",
  "iconChevronUp",
  "iconClose",
  "iconCloseGlyph",
  "iconCloseOutline",
  "iconCloseSolid",
  "iconCloudFoundry",
  "iconCode",
  "iconConsole",
  "iconContainers",
  "iconCopy",
  "iconCopyGlyph",
  "iconCrash",
  "iconDashboard",
  "iconData",
  "iconDelete",
  "iconDeleteGlyph",
  "iconDevices",
  "iconDevops",
  "iconDocument",
  "iconDollars",
  "iconDownload",
  "iconDownloadGlyph",
  "iconDraggable",
  "iconEdit",
  "iconEditGlyph",
  "iconEmail",
  "iconError",
  "iconErrorGlyph",
  "iconErrorOutline",
  "iconErrorSolid",
  "iconFavorite",
  "iconFavoriteOutline",
  "iconFavoriteSolid",
  "iconFilter",
  "iconFilterGlyph",
  "iconFinance",
  "iconFinancial",
  "iconFolder",
  "iconFolderGlyph",
  "iconFolderAdd",
  "iconForum",
  "iconFunctions",
  "iconGrid",
  "iconHeaderAvatar",
  "iconHeaderChevron",
  "iconHeaderClose",
  "iconHeaderContact",
  "iconHeaderDocs",
  "iconHeaderHamburger",
  "iconHeaderHelp",
  "iconHeaderNotification",
  "iconHeaderSearch",
  "iconHeaderTicket",
  "iconHeaderUser",
  "iconHelp",
  "iconHelpGlyph",
  "iconHelpOutline",
  "iconHelpSolid",
  "iconHpa",
  "iconHpaStress",
  "iconInfo",
  "iconInfoGlyph",
  "iconInfoOutline",
  "iconInfoSolid",
  "iconInfrastructure",
  "iconIntegration",
  "iconIot",
  "iconLaunch",
  "iconLaunchGlyph",
  "iconLight",
  "iconLightGlyph",
  "iconLink",
  "iconList",
  "iconLocked",
  "iconMaximize",
  "iconMenu",
  "iconMinimize",
  "iconMobile",
  "iconNetwork",
  "iconNewTab",
  "iconNotificationOff",
  "iconNotificationOn",
  "iconOpenWhisk",
  "iconOverflowMenu",
  "iconPa",
  "iconPaStress",
  "iconPause",
  "iconPauseGlyph",
  "iconPauseOutline",
  "iconPauseSolid",
  "iconPlay",
  "iconPlayGlyph",
  "iconPlayOutline",
  "iconPlaySolid",
  "iconPortfolio",
  "iconPower",
  "iconPowerGlyph",
  "iconPredictive",
  "iconPurchase",
  "iconRestart",
  "iconRestartGlyph",
  "iconSave",
  "iconSchematics",
  "iconSearch",
  "iconSearchGlyph",
  "iconSecurity",
  "iconServices",
  "iconSettings",
  "iconSettingsGlyph",
  "iconStarOutline",
  "iconStarSolid",
  "iconStart",
  "iconStartGlyph",
  "iconStartOutline",
  "iconStop",
  "iconStopGlyph",
  "iconStopOutline",
  "iconStopSolid",
  "iconStorage",
  "iconSubtractGlyph",
  "iconSubtractOutline",
  "iconSubtractSolid",
  "iconTerminal",
  "iconUnlock",
  "iconUnlocked",
  "iconUpload",
  "iconUser",
  "iconVisibilityOff",
  "iconVisibilityOn",
  "iconWarning",
  "iconWarningGlyph",
  "iconWarningOutline",
  "iconWarningSolid",
  "iconWatson",
  "iconWhisk"
];

function Button(props) {
  return (
    <ButtonM {...props} onClick={props.onClick} icon={Icons[props.icon]}>
      {props.children}
    </ButtonM>
  );
}

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be added to your Button
   */
  className: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether the Button should be a small variant
   */
  small: PropTypes.bool,

  /**
   * Specify the kind of Button you want to create
   */
  kind: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "ghost",
    "danger--primary",
    "tertiary"
  ]),

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.oneOf(["button", "reset", "submit"]),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes.string,

  /**
   * Specify an icon to include in the Button through a string or object
   * representing the SVG data of the icon
   */
  icon: PropTypes.oneOf(ICONS)
};

export { Button as default };
