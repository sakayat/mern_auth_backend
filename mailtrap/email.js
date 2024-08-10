import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplate.js";
import { mailTrapClient, sender } from "./mailtrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
  } catch (error) {
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    await mailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "5f823dfe-0e05-448a-90a0-1a61a264cbc6",
      template_variables: {
        name: name,
        company_info_name: "Temp Company",
      },
    });
  } catch (error) {
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendForgetPasswordEmail = async (email, resetUrl) => {
  const recipient = [{ email }];

  try {
    const res = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetUrl}", resetUrl),
      category: "Reset password",
    });
  } catch (error) {
    throw new Error(`Error sending password: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const res = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset message",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password reset",
    });
  } catch (error) {
    throw new Error(`Error sending password: ${error}`);
  }
};
