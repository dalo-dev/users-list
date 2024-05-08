export default function Footer() {
  return (
    <footer className="border-t-[1px]">
      <div className="m-auto max-w-6xl py-3 text-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
          Made with love by{" "}
          <a
            className="hover:text-foreground"
            href="https://github.com/dalo-dev"
            target="_blank"
          >
            dalo-dev
          </a>
        </p>
      </div>
    </footer>
  );
}
