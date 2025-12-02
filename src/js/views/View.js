import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /**
   *Render the received object ot DOM
   * @param {Object | Object[]} data The data is to be rendered(eg.Recipe)
   * @param {boolean} [render=true] If false , create markup string instead of rendering to DOM
   * @returns {undefined | string} A markup string is returned if render = false
   */

  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      //Updates changes Text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      //Updates changes Attributes

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `<div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div> 
    
            `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //For displaying error messages
  renderError(message = this._errorMessage) {
    const markup = ` 
         <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
          </div> `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //for displaying messages(success)
  renderMessage(message = this._message) {
    const markup = ` 
         <div class="message">
                      <div>
                        <svg>
                          <use href="${icons}.svg#icon-smile"></use>
                        </svg>
                      </div>
                      <p>
                       ${message}
                      </p>
                    </div> `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
