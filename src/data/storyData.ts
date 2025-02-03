export interface StoryNode {
  id: string;
  text: string;
  choices: Choice[];
}

interface Choice {
  text: string;
  nextNode: string;
}

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: 'Un empleado acaba de recibir un correo sospechoso con un archivo adjunto. ¿Qué haces?',
    choices: [
      {
        text: 'Abres el archivo adjunto para revisarlo.',
        nextNode: 'malware_infection'
      },
      {
        text: 'Reportas el correo electrónico al equipo de ciberseguridad.',
        nextNode: 'incident_reported'
      }
    ]
  },
  malware_infection: {
    id: 'malware_infection',
    text: 'Al abrir el archivo, tu sistema comienza a mostrar comportamientos anómalos. Se detecta un posible ataque de ransomware. ¿Qué es lo siguiente?',
    choices: [
      {
        text: 'Desconectas inmediatamente el dispositivo de la red.',
        nextNode: 'isolation_success'
      },
      {
        text: 'Intentas eliminar el archivo sospechoso manualmente.',
        nextNode: 'failed_removal'
      }
    ]
  },
  incident_reported: {
    id: 'incident_reported',
    text: 'El equipo de ciberseguridad recibe el reporte y confirma que se trata de un intento de phishing. ¿Cómo procedes?',
    choices: [
      {
        text: 'Colaboras con el equipo proporcionando más detalles del correo.',
        nextNode: 'investigation_started'
      },
      {
        text: 'Ignoras el asunto, pensando que ya está en manos del equipo.',
        nextNode: 'missed_opportunity'
      }
    ]
  },
  isolation_success: {
    id: 'isolation_success',
    text: 'Desconectar el dispositivo impidió que el ransomware se propagara por la red. El equipo de respuesta actúa rápidamente para contener el daño. ¿Qué decides hacer ahora?',
    choices: [
      {
        text: 'Participas en la investigación forense para identificar la causa raíz.',
        nextNode: 'root_cause_analysis'
      },
      {
        text: 'Dejas que el equipo maneje todo mientras te enfocas en tus tareas diarias.',
        nextNode: 'limited_involvement'
      }
    ]
  },
  failed_removal: {
    id: 'failed_removal',
    text: 'Tu intento de eliminar el archivo no funcionó y el malware ha comenzado a cifrar archivos críticos. ¿Qué acción tomas?',
    choices: [
      {
        text: 'Notificas inmediatamente al equipo de ciberseguridad.',
        nextNode: 'emergency_response'
      },
      {
        text: 'Tratas de restaurar los archivos desde una copia de seguridad local.',
        nextNode: 'backup_failure'
      }
    ]
  },
  investigation_started: {
    id: 'investigation_started',
    text: 'El equipo de ciberseguridad realiza una investigación profunda y descubre que otros empleados también recibieron correos similares. ¿Quieres colaborar más?',
    choices: [
      {
        text: 'Ofreces ayudar a educar a otros empleados sobre cómo identificar correos sospechosos.',
        nextNode: 'training_initiative'
      },
      {
        text: 'Decides no involucrarte más en el proceso.',
        nextNode: 'minimal_contribution'
      }
    ]
  },
  root_cause_analysis: {
    id: 'root_cause_analysis',
    text: 'La investigación revela que el ataque aprovechó una vulnerabilidad conocida en un software desactualizado. ¿Cómo propones abordar este problema?',
    choices: [
      {
        text: 'Recomiendas implementar un programa riguroso de actualizaciones automáticas.',
        nextNode: 'patch_management'
      },
      {
        text: 'Sugieres ignorar la vulnerabilidad porque no parece ser crítica.',
        nextNode: 'vulnerability_ignored'
      }
    ]
  },
  limited_involvement: {
    id: 'limited_involvement',
    text: 'Aunque el incidente fue contenido, falta una comprensión completa de su alcance debido a la falta de participación activa. ¿Te arrepientes de no haber colaborado más?',
    choices: [
      {
        text: 'Decides aprender más sobre respuesta a incidentes para futuras situaciones.',
        nextNode: 'learning_experience'
      },
      {
        text: 'Mantienes tu enfoque solo en tus responsabilidades habituales.',
        nextNode: 'status_quo'
      }
    ]
  },
  emergency_response: {
    id: 'emergency_response',
    text: 'El equipo de ciberseguridad actúa rápidamente para contener el ataque y minimizar los daños. ¿Qué aprendiste de esta experiencia?',
    choices: [
      {
        text: 'Importancia de notificar incidentes inmediatamente.',
        nextNode: 'lesson_learned'
      },
      {
        text: 'Decides no cambiar tu comportamiento futuro.',
        nextNode: 'no_change'
      }
    ]
  },
  backup_failure: {
    id: 'backup_failure',
    text: 'Las copias de seguridad locales estaban comprometidas por el ransomware. Ahora enfrentas la posibilidad de perder datos importantes. ¿Qué decides hacer?',
    choices: [
      {
        text: 'Buscas copias de seguridad en la nube o en servidores remotos.',
        nextNode: 'cloud_recovery'
      },
      {
        text: 'Negocias con los atacantes para pagar el rescate.',
        nextNode: 'ransom_payment'
      }
    ]
  },
  training_initiative: {
    id: 'training_initiative',
    text: 'Tu propuesta de capacitación tiene éxito, mejorando la conciencia de seguridad en toda la organización. ¿Cómo te sientes sobre tu contribución?',
    choices: [
      {
        text: 'Orgulloso de haber hecho una diferencia significativa.',
        nextNode: 'positive_outcome'
      },
      {
        text: 'Indiferente, ya que crees que esto no era tu responsabilidad inicial.',
        nextNode: 'neutral_outcome'
      }
    ]
  },
  patch_management: {
    id: 'patch_management',
    text: 'La implementación del programa de actualizaciones automáticas reduce significativamente el riesgo de futuros ataques. ¿Qué piensas sobre este logro?',
    choices: [
      {
        text: 'Estás satisfecho/a con la mejora en la postura de seguridad.',
        nextNode: 'security_improvement'
      },
      {
        text: 'Crees que aún hay áreas que necesitan atención.',
        nextNode: 'ongoing_efforts'
      }
    ]
  },
  vulnerability_ignored: {
    id: 'vulnerability_ignored',
    text: 'La decisión de ignorar la vulnerabilidad resulta en otro incidente similar semanas después. ¿Qué reflexiones tienes sobre esta situación?',
    choices: [
      {
        text: 'Reevalúas tu enfoque hacia la gestión de riesgos.',
        nextNode: 'risk_management'
      },
      {
        text: 'Persistes en tu opinión original.',
        nextNode: 'unchanged_mindset'
      }
    ]
  },
  learning_experience: {
    id: 'learning_experience',
    text: 'Tu nuevo conocimiento te prepara mejor para futuros incidentes de seguridad. ¿Cómo aplicarás lo aprendido?',
    choices: [
      {
        text: 'Compartes tus hallazgos con colegas para mejorar colectivamente.',
        nextNode: 'knowledge_sharing'
      },
      {
        text: 'Guardas esta información para ti mismo/a.',
        nextNode: 'personal_growth'
      }
    ]
  },
  lesson_learned: {
    id: 'lesson_learned',
    text: 'Entiendes la importancia crucial de notificar incidentes de forma temprana. ¿Cómo planeas aplicar esta lección en el futuro?',
    choices: [
      {
        text: 'Documentas procesos claros para responder a incidentes.',
        nextNode: 'process_documentation'
      },
      {
        text: 'Dependes de tu instinto en cada situación futura.',
        nextNode: 'instinctual_response'
      }
    ]
  },
  cloud_recovery: {
    id: 'cloud_recovery',
    text: 'Gracias a las copias de seguridad en la nube, recuperas los datos sin tener que pagar el rescate. ¿Qué conclusiones sacas de este evento?',
    choices: [
      {
        text: 'Importancia de diversificar estrategias de respaldo.',
        nextNode: 'backup_strategy'
      },
      {
        text: 'Consideras que la suerte jugó un papel importante.',
        nextNode: 'lucky_escape'
      }
    ]
  },
  ransom_payment: {
    id: 'ransom_payment',
    text: 'Pagar el rescate no garantiza la recuperación completa de los datos y pone a la organización en mayor riesgo. ¿Qué reflexiones tienes sobre esta decisión?',
    choices: [
      {
        text: 'Reconsideras la política de no negociar con atacantes.',
        nextNode: 'policy_review'
      },
      {
        text: 'Justificas la decisión como única opción disponible.',
        nextNode: 'justified_risk'
      }
    ]
  }
};
