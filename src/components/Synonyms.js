function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <>
        <div className="text-slate-400 leading-9 text-sm">
          <span className="pr-2">Synonyms:</span>
          {props.synonyms.map(function (synonym, index, array) {
            const isLast = index === array.length - 1;
            return (
              <span key={index} className="px-1">
                {synonym}
                {isLast ? "" : " •"}
              </span>
            );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default Synonyms;
