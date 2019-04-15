import React from "react";
import PropTypes from "prop-types";
import { SideNavMenu as SideNavMenuComponent } from "carbon-components-react/es/components/UIShell";
import Icon from "../../Icon/Icon";

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

function UIShellSideNavMenu(props) {
    return (
        <SideNavMenuComponent {...props} icon={<Icon icon={props.iconName} />} />
    );
}

UIShellSideNavMenu.propTypes = {
    /**
     * Provide an optional class to be applied to the containing node
     */
    className: PropTypes.string,

    /**
     * Provide <SideNavMenuItem>'s inside of the `SideNavMenu`
     */
    children: PropTypes.node,

    /**
     * Pass in a custom icon to render next to the `SideNavMenu` title
     */
    iconName: PropTypes.oneOf(ICONS).isRequired,

    /**
     * Specify whether the `SideNavMenu` is "active". `SideNavMenu` should be
     * considered active if one of its menu items are a link for the current
     * page.
     */
    isActive: PropTypes.bool,

    /**
     * Provide the text for the overall menu name
     */
    title: PropTypes.string.isRequired,

    /**
     * Specify whether the menu should default to expanded. By default, it will
     * be closed.
     */
    defaultExpanded: PropTypes.bool,
};

UIShellSideNavMenu.defaultProps = {
    defaultExpanded: false,
    isActive: false,
};

export default UIShellSideNavMenu;
