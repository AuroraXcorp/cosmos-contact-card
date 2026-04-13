import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
}

const LinkCard = ({ title, description, href, icon }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-card/80 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-brand-subtle text-foreground">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-sm font-medium text-foreground">{title}</h3>
            {description && (
              <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
            )}
          </div>
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      </div>
    </a>
  );
};

export default LinkCard;
