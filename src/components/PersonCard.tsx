import './PersonCard.css';

interface PersonCardProps {
  name: string;
  role?: string;
  description: string;
  photo: string;
}

const PersonCard = ({ name, role, description, photo }: PersonCardProps) => {
  return (
    <div className="person-card">
      <div className="person-photo">
        <img src={photo} alt={name} />
      </div>
      <div className="person-info">
        <h3 className="person-name">{name}</h3>
        {role && <p className="person-role">{role}</p>}
        <p className="person-description">{description}</p>
      </div>
    </div>
  );
};

export default PersonCard;

