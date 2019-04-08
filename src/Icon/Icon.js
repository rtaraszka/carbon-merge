import React from "react";
import PropTypes from "prop-types";
import { Icon as IconComponent } from "carbon-components-react";
import * as Icons from "carbon-icons/dist/carbon-icons.js";


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

function Icon(props) {
  return (
      <IconComponent {...props} icon={Icons[props.icon]} />
  );
}

Icon.propTypes = {
  /**
   * The CSS class name.
   */
  className: PropTypes.string,

  /**
   * The icon title.
   */
  iconTitle: PropTypes.string,

  /**
   * The icon description.
   */
  description: PropTypes.string.isRequired,

  /**
   * The `<svg>` `fill` attribute.
   */
  fill: PropTypes.string,

  /**
   * The `<svg>` `fillRule` attribute.
   */
  fillRule: PropTypes.string,

  /**
   * The `<svg>` `height` attribute.
   */
  height: PropTypes.string,

  icon: PropTypes.oneOf(ICONS),

  /**
   * The `role` attribute.
   */
  role: PropTypes.string,

  /**
   * The CSS styles.
   */
  style: PropTypes.object,

  /**
   * The `<svg>` `viewbox` attribute.
   */
  viewBox: PropTypes.string,

  /**
   * The `<svg>` `width` attribute.
   */
  width: PropTypes.string,

  /**
   * The `ref` callback for the icon.
   */
  iconRef: PropTypes.func,
};

Icon.defaultProps = {
  fillRule: 'evenodd',
  role: 'img',
  description: 'Provide a description that will be used as the title',
};

export default Icon;
