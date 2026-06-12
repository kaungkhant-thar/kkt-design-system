import React, { useState, useCallback } from "react";
import { cx } from "@kkt771/core";
import * as styles from "./CodeBlock.css.js";

export interface CodeBlockProps {
  code: string;
  language?: string;
  showCopyButton?: boolean;
  className?: string;
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  function CodeBlock(
    { code, language, showCopyButton = true, className },
    ref
  ) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }, [code]);

    return (
      <div ref={ref} className={cx(styles.wrapper, className)}>
        {(language || showCopyButton) && (
          <div className={styles.header}>
            {language ? (
              <span className={styles.language}>{language}</span>
            ) : (
              <span />
            )}
            {showCopyButton && (
              <button
                type="button"
                className={cx(styles.copyButton, copied && styles.copyButtonCopied)}
                onClick={handleCopy}
                aria-label={copied ? "Copied" : "Copy code"}
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            )}
          </div>
        )}
        <pre className={styles.pre}>
          <code className={styles.code}>{code}</code>
        </pre>
      </div>
    );
  }
);
