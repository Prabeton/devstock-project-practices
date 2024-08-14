"use client";

import React from 'react';
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState, useCallback, useMemo } from 'react';
import clsx from 'clsx';
import Link from "next/link";

import { Task, Settings, Ranking, RightArrowDouble, LeftArrowDouble, Cottage, Education, Calendar, Admin } from "@/icon/";

const Sidebar = () => {
  const t = useTranslations("Sidebar");
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); 
  const pathname = usePathname();

  const menuItems = useMemo(() => [
    { path: '/dashboard', Icon: Cottage, label: t('dashboard') },
    { path: '/ranking', Icon: Ranking, label: t('ranking') },
    { path: '/lessons', Icon: Education, label: t('lessons') },
    { path: '/calendar', Icon: Calendar, label: t('calendar') },
    { path: '/task', Icon: Task, label: t('task') },
    { path: '/settings', Icon: Settings, label: t('settings') },
    { path: '/admin-panel', Icon: Admin, label: t('adminPanel') },
  ], [t]);

  const isActive = useCallback((path: string) => {
    const regex = new RegExp(`^(\/(pl|en))?${path}$`);
    return regex.test(pathname);
  }, [pathname]);

  const getIconColor = useCallback((path: string) => {
    return isActive(path) ? "#F5A22E" : "white";
  }, [isActive]);

  type IconProps = {
    size: string;
    stroke: string;
  }

  type MenuItemProps = {
    item: {
      path: string;
      label: string;
      Icon: React.ComponentType<IconProps>;
    };
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ item, isHovered, onMouseEnter, onMouseLeave }) => {
    const color = getIconColor(item.path);
    const { Icon } = item;

    return (
      <Link href={item.path}>
        <div className="relative group">
          <div 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`w-5 h-5 transition-transform duration-300 ease-in-out
              ${isHovered ? 'scale-150' : 'scale-100'}
            `}>
            <Icon size="20px" stroke={color}/>
          </div>
          {!open && 
            <div className="absolute flex items-center justify-center invisible h-8 pl-2 pr-3 ml-4 text-sm transition-opacity transform -translate-y-1/2 bg-white border rounded opacity-0 whitespace-nowrap text-dark-Tekst left-full top-1/2 group-hover:visible group-hover:opacity-100 border-gray-Lite">
              <div className="absolute w-2 h-2 transform rotate-45 -translate-y-1/2 bg-white border-b border-l border-gray-Lite -left-1 top-1/2"></div>
              {item.label}
            </div>
          }
        </div>
      </Link>
    );
  };
  const mainMenuItems = menuItems.slice(0, 5);
  const bottomMenuItems = menuItems.slice(5);

  return ( 
    <div className={clsx("absolute flex left-0 z-20 h-full pt-4 bg-almost-black top-30",
              { "w-15": !open },
              { "w-55": open },)}>	
      <div>				
        <div className="flex flex-col items-center gap-8 pt-4 pb-4 mr-0 border border-r-0 w-15 border-almost-black h-84 border-b-gray-medium">
          <button onClick={() => setOpen((prevState) => !prevState)} 
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-half">
                { !open && <RightArrowDouble size="15px" stroke="white" />}
                { open && <LeftArrowDouble size="15px" stroke="white" />}
          </button>		
          {mainMenuItems.map((item, index) => (
            <MenuItem 
              key={index} 
              item={item} 
              isHovered={hoveredItem === item.path} 
              onMouseEnter={() => setHoveredItem(item.path)} 
              onMouseLeave={() => setHoveredItem(null)} 
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-8 pt-4 pb-4 mr-0 border border-r-0 border-almost-black w-15 h-26 border-b-gray-medium">
          {bottomMenuItems.map((item, index) => (
            <MenuItem 
              key={index} 
              item={item} 
              isHovered={hoveredItem === item.path} 
              onMouseEnter={() => setHoveredItem(item.path)} 
              onMouseLeave={() => setHoveredItem(null)} 
            />
          ))}
        </div>
      </div>	
      { open && 
        <div className="transform -translate-x-px">				
          <div className="flex flex-col items-start w-40 gap-8 pt-4 pb-4 pl-4 ml-0 transform border border-l-0 border-almost-black h-84 border-b-gray-medium">
            <div className="flex items-center justify-center w-10 h-10 bg-transparent rounded-lg"></div>
            
            {mainMenuItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <div 
                  className={clsx("h-5 text-sm",
                    { "text-white": !isActive(item.path) },
                    { "text-yellow": isActive(item.path) }
                  )}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start w-40 gap-8 pt-4 pb-4 pl-4 ml-0 border border-l-0 border-almost-black h-26 border-b-gray-medium">
            {bottomMenuItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <div 
                  className={clsx("h-5 text-sm",
                    { "text-white": !isActive(item.path) },
                    { "text-yellow": isActive(item.path) }
                  )}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>	
      }
    </div> 
  )
};

export default Sidebar;
