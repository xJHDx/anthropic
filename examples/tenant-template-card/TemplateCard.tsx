import styles from "./TemplateCard.module.css";

export type TemplatePublishState = "published" | "draft";

export type TemplateCardProps = {
  title: string;
  siteKindLabel: string;
  publishState: TemplatePublishState;
  onOpenEditor: () => void;
  onDelete?: () => void;
};

const stateLabel: Record<TemplatePublishState, string> = {
  published: "Publicado",
  draft: "Sin publicar",
};

/**
 * Card de plantilla / tenant:
 * - Animación de entrada + hover (CSS module).
 * - Eliminar solo en estado no publicado (draft); el padre decide la mutación/API.
 * - "Abrir editor" siempre visible.
 */
export function TemplateCard({
  title,
  siteKindLabel,
  publishState,
  onOpenEditor,
  onDelete,
}: Readonly<TemplateCardProps>) {
  const canDelete = publishState === "draft";

  return (
    <article className={styles.card}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.meta}>{siteKindLabel}</span>
        <span className={styles.badge}>{stateLabel[publishState]}</span>
      </div>
      <div className={styles.actions}>
        {canDelete ? (
          <button
            type="button"
            className={styles.btnDelete}
            onClick={onDelete}
            aria-label="Eliminar plantilla"
            title="Eliminar plantilla (solo sin publicar)"
          >
            ×
          </button>
        ) : null}
        <button type="button" className={styles.btnEditor} onClick={onOpenEditor}>
          <svg
            className={styles.iconPencil}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
          Abrir editor
        </button>
      </div>
    </article>
  );
}
