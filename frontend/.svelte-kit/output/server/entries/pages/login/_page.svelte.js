import { c as create_ssr_component, t as subscribe, v as validate_component, l as escape } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index3.js";
import { B as Button_1 } from "../../../chunks/Button.js";
import { L as Label } from "../../../chunks/index4.js";
import { T as Textfield } from "../../../chunks/Textfield.js";
import { S as Snackbar } from "../../../chunks/Actions.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Container.svelte-lmq98x{width:300px;height:300px;margin:auto}.input.svelte-lmq98x{margin-top:20px;width:100%;margin-left:45px}.btnWrapper.svelte-lmq98x{width:100%;height:35px;display:flex;justify-content:space-around;margin-top:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let snackbarWithoutClose;
  let message;
  let form = writable({ username: "\u5F20\u4E09", pw: "123456", id: 0 });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"Container svelte-lmq98x"}"><div class="${"input svelte-lmq98x"}">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "shaped-outlined",
        variant: "outlined",
        label: "username",
        value: $form.username
      },
      {
        value: ($$value) => {
          $form.username = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="${"input svelte-lmq98x"}">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "password",
        class: "shaped-outlined",
        variant: "outlined",
        label: "password",
        value: $form.pw
      },
      {
        value: ($$value) => {
          $form.pw = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="${"btnWrapper svelte-lmq98x"}">${validate_component(Button_1, "Button").$$render($$result, { color: "primary", variant: "raised" }, {}, {
      default: () => {
        return `login`;
      }
    })}</div>
    ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      {
        class: "demo-success",
        this: snackbarWithoutClose
      },
      {
        this: ($$value) => {
          snackbarWithoutClose = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(message)}`;
            }
          })}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  $$unsubscribe_form();
  return $$rendered;
});
export {
  Page as default
};
