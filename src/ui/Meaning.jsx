function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h1 className="text-blue-400 py-2">{props.meaning.partOfSpeech}</h1>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="text-blue-950 leading-9 capitalize">
              {definition.definition}
            </p>

            <p className="text-slate-300 italic capitalize">
              Example: {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
