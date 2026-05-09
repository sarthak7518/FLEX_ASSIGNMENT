import React from 'react';
import './Pagination.css';

export const Pagination = ({ page = 1, totalPages = 10, onChange, siblingCount = 1 }) => {
  const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const firstPage = 1, lastPage = totalPages;
  const leftSibling = Math.max(page - siblingCount, firstPage);
  const rightSibling = Math.min(page + siblingCount, lastPage);
  const showLeftDots = leftSibling > firstPage + 1;
  const showRightDots = rightSibling < lastPage - 1;
  let pages = [];
  if (!showLeftDots && showRightDots) pages = [...range(1, 3 + siblingCount * 2), '...', lastPage];
  else if (showLeftDots && !showRightDots) pages = [firstPage, '...', ...range(lastPage - (2 + siblingCount * 2) + 1, lastPage)];
  else if (showLeftDots && showRightDots) pages = [firstPage, '...', ...range(leftSibling, rightSibling), '...', lastPage];
  else pages = range(firstPage, lastPage);

  return (
    <nav className="fp-pagi" aria-label="Pagination">
      <button className="fp-pagi__btn" disabled={page === 1} onClick={() => onChange?.(page - 1)} aria-label="Previous">‹</button>
      {pages.map((p, i) =>
        p === '...'
          ? <span key={`d-${i}`} className="fp-pagi__dots">…</span>
          : <button key={p} className={`fp-pagi__btn ${p === page ? 'is-active' : ''}`} onClick={() => onChange?.(p)}>{p}</button>
      )}
      <button className="fp-pagi__btn" disabled={page === totalPages} onClick={() => onChange?.(page + 1)} aria-label="Next">›</button>
    </nav>
  );
};
export default Pagination;
