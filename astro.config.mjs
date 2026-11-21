// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const external = { target: '_blank', rel: 'noopener noreferrer' };

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.aqunex.net',
	integrations: [
		starlight({
			title: 'Aqunex Docs',
			description:
				'Aqunex Hosting の公式ドキュメント。Minecraft サーバーの作成から運用まで、Aqunex のサービスを安心して使うためのガイドです。',
			defaultLocale: 'ja',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				alt: 'Aqunex',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			lastUpdated: true,
			credits: false,
			customCss: ['./src/styles/custom.css'],
			components: {
				Banner: './src/components/Banner.astro',
			},
			head: [
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#0a9efa' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Aqunex Docs' } },
			],
			social: [
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/Y8QjmAATAt',
				},
				{ icon: 'x.com', label: 'X', href: 'https://x.com/aqunex_net' },
			],
			sidebar: [
				{
					label: 'はじめに',
					items: [
						{ label: 'Aqunex Hosting へようこそ', slug: 'getting-started' },
						{ label: 'Aqunex ID を作成する', slug: 'getting-started/account' },
						{ label: 'サーバーを作成する', slug: 'getting-started/create-server' },
						{ label: 'サーバーに接続する', slug: 'getting-started/connect' },
						{ label: 'フレンドを招待する', slug: 'getting-started/invite' },
					],
				},
				{
					label: 'サーバー管理',
					items: [
						{ label: 'コントロールパネル', slug: 'servers/panel' },
						{ label: '起動・停止と再起動', slug: 'servers/power' },
						{ label: 'ソフトウェアとバージョン', slug: 'servers/software' },
						{ label: 'MOD・プラグイン', slug: 'servers/mods' },
						{ label: 'バックアップ', slug: 'servers/backups' },
						{ label: 'メンバーと権限', slug: 'servers/members' },
					],
				},
				{
					label: 'アカウント',
					items: [
						{ label: 'Aqunex ID について', slug: 'account/aqunex-id' },
						{ label: 'アカウントの安全を守る', slug: 'account/security' },
					],
				},
				{
					label: 'サポート',
					items: [
						{ label: 'よくある質問', slug: 'support/faq' },
						{ label: 'トラブルシューティング', slug: 'support/troubleshooting' },
						{ label: 'コミュニティ', slug: 'support/community' },
					],
				},
				{
					label: 'Aqunex について',
					items: [
						{ label: '運営情報', slug: 'about' },
						{ label: 'サービス一覧', slug: 'services' },
					],
				},
				{
					label: 'リンク',
					items: [
						{ label: '公式サイト', link: 'https://aqunex.net', attrs: external },
						{ label: 'Aqunex Hosting', link: 'https://hosting.aqunex.net', attrs: external },
						{ label: '稼働状況', link: 'https://status.aqunex.net', attrs: external },
						{ label: 'お知らせ', link: 'https://blog.aqunex.net', attrs: external },
						{ label: '利用規約', link: 'https://aqunex.net/legal/terms', attrs: external },
						{
							label: 'プライバシーポリシー',
							link: 'https://aqunex.net/legal/privacy',
							attrs: external,
						},
					],
				},
			],
		}),
	],
});
