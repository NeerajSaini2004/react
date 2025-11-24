import TicketNum from './TicketNum';

export default function Ticket({ticket}) {
    return (
        <div>
            <p>Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNum key={idx} num={num} />
            ))}
        </div>
    );
}