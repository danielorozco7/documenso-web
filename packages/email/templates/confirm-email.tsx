import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
} from '@react-email/components';

import config from '@documenso/tailwind-config';

import {
  TemplateConfirmationEmail,
  TemplateConfirmationEmailProps,
} from '../template-components/template-confirmation-email';
import { TemplateFooter } from '../template-components/template-footer';

export const ConfirmEmailTemplate = ({
  confirmationLink,
  assetBaseUrl,
}: TemplateConfirmationEmailProps) => {
  const previewText = `Please confirm your email address`;

  const getAssetUrl = (path: string) => {
    return new URL(path, assetBaseUrl).toString();
  };

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: config.theme.extend.colors,
            },
          },
        }}
      >
        <Body className="mx-auto my-auto bg-white font-sans">
          <Section>
            <Container className="mx-auto mb-2 mt-8 max-w-xl rounded-lg border border-solid border-slate-200 p-4 backdrop-blur-sm">
              <Section>
                <Img
                  src={getAssetUrl('/static/logo.png')}
                  alt="Documenso Logo"
                  className="mb-4 h-6"
                />

                <TemplateConfirmationEmail
                  confirmationLink={confirmationLink}
                  assetBaseUrl={assetBaseUrl}
                />
              </Section>
            </Container>
            <div className="mx-auto mt-12 max-w-xl" />

            <Container className="mx-auto max-w-xl">
              <TemplateFooter isDocument={false} />
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};
