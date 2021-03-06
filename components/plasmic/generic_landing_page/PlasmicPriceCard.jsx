// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tUi91SKLM7F3mDsG9F2SWh
// Component: 11te5oPhWkKopS
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Divider from "../../Divider"; // plasmic-import: F2juTEgTCr2z8q/component
import ValueProp from "../../ValueProp"; // plasmic-import: mliw04g7hoJQEv/component
import Button from "../../Button"; // plasmic-import: 01mjekF7qCxWMP/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: tUi91SKLM7F3mDsG9F2SWh/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: 11te5oPhWkKopS/css
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: ehj71t7WqbMCVg/icon

export const PlasmicPriceCard__VariantProps = new Array("primary", "borders");

export const PlasmicPriceCard__ArgProps = new Array(
  "label",
  "dollars",
  "description",
  "action"
);

function PlasmicPriceCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatLeft]: hasVariant(
            variants,
            "borders",
            "flatLeft"
          ),

          [sty.rootborders_flatRight]: hasVariant(
            variants,
            "borders",
            "flatRight"
          ),

          [sty.rootprimary]: hasVariant(variants, "primary", "primary")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pJln6)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__i8YGw)}>
          <div className={classNames(projectcss.all, sty.freeBox__v88Nv)}>
            {p.renderPlasmicSlot({
              defaultContents: "Starter",
              value: args.label,
              className: classNames(sty.slotTargetLabel)
            })}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xegoz)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___74Eq)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__flqHr
              )}
            >
              {"$"}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox___5Urrh)}>
              {p.renderPlasmicSlot({
                defaultContents: "8",
                value: args.dollars,
                className: classNames(sty.slotTargetDollars)
              })}
            </div>
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kWcD
            )}
          >
            {"/month"}
          </div>
        </p.Stack>
      </p.Stack>

      <Divider
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames("__wab_instance", sty.divider)}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__k3Qvn)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9C9Tn)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__nvhAt)}
                  description={
                    "Vestibulum mollis odio dictum ultrices facilisis molestie vestibulum"
                  }
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__i9Xf)}
                      role={"img"}
                    />
                  }
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp___3Nu0)}
                  description={"Mus consequat a justo"}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg___1DYo6)}
                      role={"img"}
                    />
                  }
                />
              </React.Fragment>
            ),

            value: args.description
          })}
        </p.Stack>

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          color={hasVariant(variants, "primary", "primary") ? "green" : "white"}
          extraSmallShadow={true}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pLs5V
                )}
              >
                {"Buy starter"}
              </div>
            ),

            value: args.action
          })}
        </Button>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "divider", "button"],
  divider: ["divider"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPriceCard__ArgProps,
      internalVariantPropNames: PlasmicPriceCard__VariantProps
    });

    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */
