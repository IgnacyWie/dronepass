export default function WalletButton(props) {
  return (
    <button onClick={props.action}>
      <img src="/wallet.svg" className="h-16" />
    </button>
  );
}
