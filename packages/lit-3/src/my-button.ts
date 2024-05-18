
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example button custom element.
 *
 * @slot - This element has a slot
 */
@customElement('my-button')
export class MyButton extends LitElement {


  render() {
    return html`
        <button>
            <slot></slot>
        </button>
    `
  }
  static styles = css`
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton
  }
}
