import React from 'react'

function About() {
    return (
        <div className='section'>
            <div className='container py-3'>
                <p>Benvenuti su CampusHome, il punto di riferimento per gli studenti in cerca di alloggi accoglienti e confortevoli durante il loro percorso accademico. Ci impegniamo a fornire soluzioni abitative sicure e adatte alle esigenze degli studenti, offrendo un'ampia gamma di opzioni tra cui scegliere.</p>
                <div className='py-2'>
                    <h3>La Nostra missione</h3>
                    <p>La nostra missione è quella di facilitare il processo di ricerca e prenotazione di alloggi per studenti, garantendo un'esperienza senza stress e soddisfacente. Ci impegniamo a creare un ambiente abitativo che favorisca lo studio, la socializzazione e il benessere degli studenti universitari.</p>
                </div>
                <div className='py-2'>
                    <h3>I Nostri Servizi</h3>
                    <div className='d-flex flex-column flex-md-row gap-md-5 justify-content-center py-3'>
                        <div className="card border-primary mb-3 ">
                            <div className="card-body text-primary">
                                <h5 className="card-title">Alloggi Universitari:</h5>
                                <p className="card-text">Offriamo una vasta selezione di alloggi universitari, tra cui appartamenti, monolocali, camere singole e doppie, attici, ville e molto altro.</p>
                            </div>
                        </div>
                        <div className="card border-primary mb-3">
                            <div className="card-body text-primary">
                                <h5 className="card-title">Servizi Connessi:</h5>
                                <p className="card-text">Oltre agli alloggi, mettiamo a disposizione dei nostri clienti servizi aggiuntivi come pulizia, connessione Wi-Fi, riscaldamento, aria condizionata, lavatrice e parcheggio.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-2'>
                    <h3>Perchè Sceglierci</h3>
                    <p>Affidabilità: Collaboriamo con proprietari affidabili per garantire la qualità e la sicurezza degli alloggi offerti.
                        Convenienza: Offriamo soluzioni abitative convenienti e personalizzate per soddisfare le esigenze di ogni studente.
                        Assistenza Personalizzata: Il nostro team è sempre disponibile per fornire supporto e assistenza durante tutto il processo di ricerca e prenotazione dell'alloggio.</p>
                </div>
            </div>
        </div>
    )
}

export default About