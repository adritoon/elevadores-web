"use server";

import { Resend } from "resend";

// Asegúrate de que esta variable esté en tu archivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const mensaje = formData.get("mensaje") as string;
  const telefono = formData.get("telefono") as string;

  try {
    const { data, error } = await resend.emails.send({
      /* IMPORTANTE: Si no has validado un dominio en Resend, 
         DEBES usar "onboarding@resend.dev" aquí.
      */
      from: "ASCMET Web <onboarding@resend.dev>", 
      
      /* AQUÍ TU CORREO DONDE RECIBIRÁS LOS CLIENTES */
      to: ["adrian13759@gmail.com"], 
      
      subject: `🚀 Nueva Cotización: ${nombre}`,
      
      /* Esto permite que cuando le des a "Responder" en tu mail, 
         le escribas directo al cliente */
      replyTo: email, 
      
      /* Cuerpo del correo bien estructurado con colores corporativos ASCMET */
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #4A525D; border: 1px solid #E2E8F0; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <h2 style="color: #041E42; margin-top: 0; text-transform: uppercase; letter-spacing: -0.5px; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px;">Nuevo Contacto • ASCMET</h2>
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Nombre:</strong> ${nombre}</p>
            <p style="margin: 8px 0;"><strong>Teléfono:</strong> ${telefono}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #00A3E0; text-decoration: none;">${email}</a></p>
          </div>
          <hr style="border: 0; border-top: 3px solid #00A3E0; margin: 25px 0;" />
          <p style="color: #041E42; font-weight: bold; margin-bottom: 10px; font-size: 16px;">Mensaje del cliente:</p>
          <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; border-left: 4px solid #4A525D; margin-top: 0; font-style: italic;">
            ${mensaje}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Error inesperado:", error);
    return { success: false };
  }
}