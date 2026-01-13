import * as React from 'react';
import styles from './Textoimg.module.scss';
import type { ITextoimgProps } from './ITextoimgProps';

export default class Textoimg extends React.Component<ITextoimgProps> {
  public render(): React.ReactElement<ITextoimgProps> {
    const { innerHtml } = this.props;

    const cleanHtml = (innerHtml || '').replace(/\\"/g, '"');
    return (
      <section className={styles.textoimg}>
        <div className={styles.contentArea}>
          {/* O conteúdo da API entrará aqui sem nenhuma div de saudação acima */}
          <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        </div>
      </section>
    );
  }
}