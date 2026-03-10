<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // 1. Validation des données (La barrière magique)
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'message' => 'required|string|min:10',
        ]);

        try {
            // 2. Logique d'envoi (Ici on utilise une closure pour tester rapidement sans créer de classe Mail séparée)
            Mail::raw($validated['message'], function ($message) use ($validated) {
                $message->to('killian.wauterspro@gmail.com')
                        ->subject('Nouveau Sort de Communication de : ' . $validated['name'])
                        ->from($validated['email'], $validated['name']);
            });

            // 3. Retour vers le frontend avec un message de succès
            return back()->with('success', 'Le sort a atteint sa cible !');
            
        } catch (\Exception $e) {
            Log::error("Erreur d'envoi de mail: " . $e->getMessage());
            return back()->withErrors(['message' => "Le sort a échoué... Vérifiez votre connexion au mana (serveur mail)."]);
        }
    }
}
