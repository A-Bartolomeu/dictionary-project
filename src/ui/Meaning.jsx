import Synonyms from "./Synonyms";

function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h1 className="text-blue-400 py-2">{props.meaning.partOfSpeech}</h1>

      {props.meaning.definitions.map(function (definition, index) {
        const example = definition.example;
        return (
          <div key={index}>
            <p className="text-blue-950 leading-9 capitalize">
              {definition.definition}
            </p>

            <p className="text-green-500 italic normal-case">
              {example === undefined ? null : `Example: ${example}`}
            </p>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
