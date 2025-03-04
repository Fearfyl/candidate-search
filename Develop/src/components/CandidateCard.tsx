import React from 'react';
import Candidate from '../interfaces/Candidate.interface';
import '../style/CandidateCard.css';

interface CandidateCardProps {
    candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => (
    <li className="candidate-card" key={candidate.id}>
        <img src={candidate.avatar_url} alt={candidate.login} width="50" />
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            {candidate.login}
        </a>
        <p>Name: {candidate.name || 'user has not added that info'}</p>
        <p>Bio: {candidate.bio || 'user has not added that info'}</p>
        <p>Location: {candidate.location || 'user has not added that info'}</p>
        <p>Email: {candidate.email || 'user has not added that info'}</p>
        <p>Company: {candidate.company || 'user has not added that info'}</p>
    </li>
);

export default CandidateCard;
