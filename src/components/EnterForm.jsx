export default function EnterForm({ label = 'Cell', required = true, placeholder = '', note = 'Enter the cell ID e.g.', noteExample = 'D3 or MyTable[[#TOTALS],[ColumnName]]' }) {
  return (
    <div className="enter-form">
      <div className="enter-form__top">
        <button className="enter-form__collapse" aria-label="Collapse">
          <span className="enter-form__collapse-rect">
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.500008 0.500008L4.50001 4.00001L0.500008 7.50001" stroke="#7E8FA0" strokeLinecap="round"/>
            </svg>
          </span>
        </button>
        <div className="enter-form__header">
          <span className="enter-form__label">{label}</span>
          {required && <span className="enter-form__required">*</span>}
        </div>
      </div>

      <div className="enter-form__input-row">
        <input className="enter-form__input" type="text" placeholder={placeholder} onFocus={e => e.target.placeholder = "Enter text or type '/' to search"} onBlur={e => e.target.placeholder = placeholder} />
      </div>

      <div className="enter-form__notes">
        <span className="enter-form__note-text">{note}</span>
        <span className="enter-form__note-example">{noteExample}</span>
      </div>
    </div>
  );
}
