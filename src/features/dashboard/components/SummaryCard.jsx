import Card from "../../../components/ui/Card";

function SummaryCard({ title, value }) {
  return (
    <Card className="summary-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
    </Card>
  );
}

export default SummaryCard;