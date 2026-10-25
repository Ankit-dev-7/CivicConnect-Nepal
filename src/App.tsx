import './index.css';
import { ShieldCheck, MapPin, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-civic-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md border border-civic-slate-200 p-8">
        
        <div className="flex items-center space-x-3 mb-6 border-b border-civic-slate-200 pb-4">
          <ShieldCheck className="w-9 h-9 text-civic-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-civic-slate-900">
              CivicConnect Nepal
            </h1>
            <p className="text-sm text-civic-slate-700">
              Bharatpur Metropolitan City — Design System Check
            </p>
          </div>
        </div>


        <div className="bg-civic-blue-50 border border-civic-blue-100 rounded-lg p-4 mb-6 text-civic-blue-900">
          <p className="font-semibold text-base"></p>
          <p className="text-sm text-civic-slate-700 mt-1">
            Tailwind CSS styling, custom color variables, and Lucide icons are configured and ready.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex flex-col items-start">
            <div className="flex items-center space-x-2 text-civic-crimson-600 font-semibold mb-1">
              <AlertTriangle className="w-5 h-5" />
              <span>Reported</span>
            </div>
            <p className="text-xs text-slate-600">New issue logged in system.</p>
          </div>

          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 flex flex-col items-start">
            <div className="flex items-center space-x-2 text-civic-amber-600 font-semibold mb-1">
              <Clock className="w-5 h-5" />
              <span>In Progress</span>
            </div>
            <p className="text-xs text-slate-600">Work order assigned.</p>
          </div>

          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex flex-col items-start">
            <div className="flex items-center space-x-2 text-civic-green-600 font-semibold mb-1">
              <CheckCircle2 className="w-5 h-5" />
              <span>Resolved</span>
            </div>
            <p className="text-xs text-slate-600">Issue completed & verified.</p>
          </div>

        </div>
        <div className="mt-8 pt-4 border-t border-civic-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-slate-400" /> Bharatpur, Chitwan
          </span>
          <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">Frontend Demo Ready</span>
        </div>

      </div>
    </div>
  );
}