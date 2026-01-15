import './styles.css'
import Logo from "./components/logo";
import { BiHome, BiLogOut, BiTrendingUp } from "react-icons/bi";
import { navigateToUrl } from "single-spa";
import { useAuthUser, auth } from '@grupo21/shared-react';

export default function Root(props) {
  const user = useAuthUser()

  const { logoutUser } = auth;

  const tabs = [
    { key: "Inicio", label: "Início", icon: BiHome, href: "/dashboard" },
    {
      key: "Transacoes",
      label: "Transações",
      icon: BiTrendingUp,
      href: "/dashboard/transactions",
    },
  ];

  const activeTab =
    tabs.find((tab) => location.pathname.startsWith(tab.href))?.key || "inicio";

  async function handleLogout() {
    try {
      await logoutUser();
      navigateToUrl("/sign-in");
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  }

  return (
    <header className="flex max-sm:flex-row items-center justify-between min-md:px-16 max-sm:px-4 py-8 w-full">
      <div className="flex justify-between items-center ">
        <Logo showText={!user} />

        {user && (
          <nav className="flex border-b border-gray-200 ml-8 max-sm:ml-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  className={`
                  relative flex items-center gap-1 max-sm:px-2 px-4 py-2 -mb-px font-medium transition-colors max-sm:text-xs
                  ${isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    }
                `}
                  onClick={() => navigateToUrl(tab.href)}
                >
                  <Icon />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {user ? (
        <button onClick={handleLogout} className='button-secondary row gap-3 justify-center items-center'>
          <BiLogOut />
          Sair
        </button>
      ) : (
        <div className="flex items-center gap-4 max-sm:gap-2">
          <button onClick={() => navigateToUrl('/sign-in')} className="button-secondary">Entrar</button>
          <button onClick={() => navigateToUrl('/sign-up')} className="button-primary">Criar Conta</button>
        </div>
      )}
    </header>
  );
}
