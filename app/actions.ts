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
      
      /* Cuerpo del correo bien estructurado */
      html: `
        <div style="font-family: sans-serif; color: #171717; border: 1px solid #E5E7EB; padding: 20px; border-radius: 10px;">
          <h2 style="color: #1e3a8a;">Nuevo mensaje desde la web ASCMET</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Mensaje:</strong></p>
          <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px;">${mensaje}</p>
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