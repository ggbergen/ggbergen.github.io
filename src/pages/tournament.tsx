import { useState, useEffect } from 'react';
import axios from 'axios';

interface Tournament {
  let: any
  tournament: {
    id: number;
    name: string;
    full_challonge_url: string;
    // Add more properties as needed
  };
  // Add more properties as needed
}

const EndedTournaments = () => {
  const [endedTournaments, setEndedTournaments] = useState<Tournament[]>([]);

  useEffect(() => {
    const fetchEndedTournaments = async () => {
      try {
        const apiKey = '8hoVLm8MTGU5RcaiV6isO1yihY8HhazL5Yk2PZtE';
        const apiUrl = `https://api.challonge.com/v1/tournaments.json?api_key=${apiKey}&state=ended`;

        const response = await axios.get<Tournament[]>(apiUrl);
        setEndedTournaments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEndedTournaments();
  }, []);

  const reversedTournaments = endedTournaments.slice().reverse();

  return (  
    <div>
      <h1>Alle Turneringer</h1>
      <ul>
        {reversedTournaments.map((tournament) => (
          <li key={tournament.tournament.id}>
            {/* Display tournament details based on your data structure */}
            <p>{`${tournament.tournament.name}`}</p>
            <p><a target="_blank" href={tournament.tournament.full_challonge_url} rel="noopener noreferrer">{`${tournament.tournament.full_challonge_url}`}</a></p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EndedTournaments;
