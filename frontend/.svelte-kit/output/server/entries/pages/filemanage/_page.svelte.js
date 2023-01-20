import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { B as Button_1 } from "../../../chunks/Button.js";
import { T as Textfield } from "../../../chunks/Textfield.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btnWrapper.svelte-6pna4r{width:200px;margin:auto;margin-top:30px}.hide-file-ui.svelte-6pna4r input[type='file']::file-selector-button{display:none}.hide-file-ui.svelte-6pna4r :not(.mdc-text-field--label-floating) input[type='file']{color:transparent}.form.svelte-6pna4r{margin:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let file = null;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"form svelte-6pna4r"}"><div class="${"hide-file-ui svelte-6pna4r"}">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      { label: "File", type: "file", files: file },
      {
        files: ($$value) => {
          file = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="${"btnWrapper  svelte-6pna4r"}">
        ${validate_component(Button_1, "Button").$$render($$result, { variant: "raised" }, {}, {
      default: () => {
        return `upload`;
      }
    })}
        ${validate_component(Button_1, "Button").$$render($$result, { variant: "raised" }, {}, {
      default: () => {
        return `delete`;
      }
    })}
        </div>    
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
