interface EmailTemplateProps {
  values: {
    name?: string;
    desired_area?: string;
    email?: string;
    message?: string;
  };
}

export const ContactEmailTemplate = ({
  values,
}: EmailTemplateProps): string => {
  const { name = "", desired_area = "", email = "", message = "" } = values;

  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New query by ${name}</title>
          <style>
            body {
              font-family: 'Helvetica Neue', 'Helvetica', Arial, 'Lucida Grande', sans-serif;
              background-color: #fafafa;
              margin: 0;
              padding: 0;
            }
            .email-container {
              width: 95%;
              height: 100%;
              padding: 20px;
              background-color: #fafafa;
            }
            .email-content {
              border: 1px solid #eeeeee;
              background-color: #ffffff;
              border-radius: 5px;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .email-header img {
              max-width: 100px;
            }
            .email-header,
            .email-footer {
              text-align: center;
              border-bottom: 1px solid #dddddd;
              margin-bottom: 20px;
              padding-bottom: 20px;
            }
            .email-footer {
              padding-top: 20px;
              font-weight: bold;
              margin-top: 30px;
              color: #666666;
              border-top: 1px solid #dddddd;
            }
            .email-content h1 {
              font-weight: 500;
              font-size: 24px;
              margin: 20px 0 30px 0;
              color: #333333;
            }
            .email-content h2 {
              font-weight: 200;
              font-size: 16px;
              margin: 20px 0;
              color: #333333;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-content">
              <div class="email-header">
                <img
                  src="${process.env.NEXT_PUBLIC_APP_URL}/assets/logo.png
                  alt="Tenzin Sopa Real Estate"
                />
              </div>
              <h1>You have a new query:</h1>
              ${name ? `<h2>Name: ${name}</h2>` : ""}
              ${desired_area ? `<h2>Pickup Location: ${desired_area}</h2>` : ""}
              ${email ? `<h2>Email: ${email}</h2>` : ""}
              ${message ? `<h2>Message: ${message}</h2>` : ""}
              <div class="email-footer">Tenzin Sopa Real Estate</div>
            </div>
          </div>
        </body>
      </html>
    `;
};
