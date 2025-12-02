import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goto = +btn.dataset.goto;
      handler(goto);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );

    //Page 1 and other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage, true);
    }
    //Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(curPage, false);
    }

    //Other page
    if (curPage < numPages) {
      return `
        ${this._generateMarkupButton(curPage, true)}
        ${this._generateMarkupButton(curPage, false)}
        `;
    }
    //Page1 and no other pages
    return '';
  }

  _generateMarkupButton(curPage, isNextPage) {
    const dataGoTo = isNextPage ? curPage + 1 : curPage - 1;

    return `
    <button data-goto="${dataGoTo}" class="btn--inline ${
      isNextPage ? 'pagination__btn--next' : 'pagination__btn--prev'
    }">
      <svg class="search__icon">
        <use href="${icons}${
      isNextPage ? '#icon-arrow-right' : '#icon-arrow-left'
    }"></use>
      </svg>
      <span>Page ${dataGoTo}</span>
    </button>
  `;
  }
}

export default new PaginationView();
