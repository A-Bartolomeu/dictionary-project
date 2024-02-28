import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <section className="bg-slate-50 p-4 rounded-md mb-4 shadow-md shadow-stone-100">
      <h1 className="text-blue-400 pt-2 pb-2 uppercase font-semibold">
        {props.meaning.partOfSpeech}
      </h1>

      {props.meaning.definitions.map(function (definition, index) {
        const example = definition.example;
        return (
          <div key={index}>
            <p className="text-blue-950 leading-9 capitalize">
              {definition.definition}
            </p>

            <p className="text-blue-400 italic normal-case leading-9 text-sm">
              {example === undefined ? null : `Example: ${example}`}
            </p>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </section>
  );
}

export default Meaning;
