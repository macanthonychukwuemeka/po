const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4>
        <p className="mt-2 text-slate-500"></p>
      </h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

export default SkillsCard;
