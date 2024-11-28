import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(data);
    }
  } else if (req.method === 'POST') {
    const { nombre_completo, correo, fecha_nacimiento, contraseña, escuela, rol, es_menor, suscrito_a_noticias } = req.body;

    const { error } = await supabase.from('users').insert([
      {
        nombre_completo,
        correo,
        fecha_nacimiento,
        contraseña,
        escuela,
        rol,
        es_menor,
        suscrito_a_noticias,
      },
    ]);

    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message: 'Usuario registrado exitosamente' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
