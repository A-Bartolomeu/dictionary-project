function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="text-red-500">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="px-1">
              {synonym} •
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
