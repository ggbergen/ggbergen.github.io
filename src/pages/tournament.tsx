import { useState, useEffect } from 'react';
import axios from 'axios';

interface Tournament {
  let: any
  tournament: {
    id: any
    name: string;
    full_challonge_url: string;
    live_image_url: string
  };
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
            <p><a target="_blank" href={tournament.tournament.full_challonge_url} rel="noopener noreferrer">{tournament.tournament.name}</a></p>
            <img src={tournament.tournament.live_image_url} alt='Bracket overview'/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EndedTournaments;
