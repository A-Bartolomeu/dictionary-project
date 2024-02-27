function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <>
        <h2 className="font-semibold">Synonyms:</h2>
        <div className="text-red-500">
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
