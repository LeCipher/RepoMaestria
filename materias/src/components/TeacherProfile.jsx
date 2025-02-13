import React from 'react';
import { FaRegUser, FaEnvelope, FaBook } from 'react-icons/fa';

function TeacherProfile({ 
  name, 
  subjects, 
  description, 
  contactEmail 
}) {
  return (
    <div 
      className="quiz-card" 
      style={{ 
        backgroundColor: 'var(--ifm-background-color)',
        color: 'var(--ifm-font-color-base)',
        padding: '1rem',
        borderRadius: '0.5rem'
      }}
    >
      <div 
        className="teacher-header" 
        style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          alignItems: 'center', 
          marginBottom: '1.5rem'
        }}
      >
        <div 
          style={{ 
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'var(--ifm-background-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid var(--ifm-background-color)'
          }}
        >
          <FaRegUser 
            style={{ 
              color: 'var(--ifm-color-primary)', 
              fontSize: '3rem',
              width: '100%',
              height: '100%',
              padding: '1rem'
            }} 
          />
        </div>
        <div>
          <h2 
            className="quiz-question" 
            style={{ 
              marginBottom: '0.5rem',
              color: 'var(--ifm-font-color-base)'
            }}
          >
            {name}
          </h2>
          <div 
            style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              flexWrap: 'wrap'
            }}
          >
            {subjects.map((subject, index) => (
              <span 
                key={index}
                style={{
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-font-color-base)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <FaBook 
                  style={{ 
                    color: 'var(--ifm-color-success)', 
                    fontSize: '0.8rem'
                  }} 
                />
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="teacher-details" 
        style={{ 
          display: 'grid', 
          gap: '1rem'
        }}
      >
        <div>
          <p 
            style={{ 
              color: 'var(--ifm-font-color-base)', 
              lineHeight: '1.6', 
              margin: 0 
            }}
          >
            {description}
          </p>
        </div>

        <div 
          style={{ 
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--ifm-background-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <FaEnvelope 
            style={{ 
              color: 'var(--ifm-color-primary)', 
              fontSize: '1.2rem'
            }} 
          />
          <strong 
            style={{ 
              color: 'var(--ifm-font-color-base)' 
            }}
          >
            Contacto:
          </strong>
          <a 
            style={{
              color: 'var(--ifm-color-success)',
              textDecoration: 'none',
              fontWeight: 500
            }}
          >
            {contactEmail}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
