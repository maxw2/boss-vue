import hr_company from './recom_company_image/hr_image.gif'
import company_image from './recom_company_image/company_image.jpg'
import company_boss_image from './recom_company_image/companyBoss.jpg'
import company_banner_0 from './recom_company_image/companyBanner_0.jpg'
import company_banner_1 from './recom_company_image/companyBanner_1.jpg'

const recom_company = {
	url: '/recom_company',
	res: [{
		// COMPANY
		companyId: 100, // 公司Id
		companyName: '蚂蚁金服', // 公司名
		companyImage: company_image, // 公司Logo
		companyBoss:{
			name:"井贤栋",
			image:company_boss_image,
			content:"井贤栋，男，汉族，1994年毕业于上海交通大学管理学院，获得工学学士学位，2005年毕业于明尼苏达大学卡尔森管理学院EMBA，获得明尼苏达大学卡尔森管理学院工商管理硕士学位（MBA）。",
			title:'现任蚂蚁金服董事长，兼任CEO。'
		},
		companyBanner:[company_banner_0,company_banner_1],// 公司广告
		companyPeopNum: 10000, // 公司人数	
		companyAddress: '上海 浦东新区 陆家嘴', // 公司地址
		financing: false, // 是否融资
		marker: [121.50109, 31.23691], // 公司经纬度
		companyContent:`蚂蚁金融服务集团（以下称“蚂蚁金服”）起步于2004年成立的支付宝。2014年10月，蚂蚁金服正式成立。蚂蚁金服以“为世界带来微小而美好的改变”为愿景，致力于打造开放的生态系统，通过“互联网推进器计划”助力金融机构和合作伙伴加速迈向“互联网+”，为小微企业和个人消费者提供普惠金融服务。
					<br>蚂蚁金服集团旗下及相关业务包括生活服务平台支付宝、智慧理财平台蚂蚁聚宝、云计算服务平台蚂蚁金融云、独立第三方信用评价体系芝麻信用以及网商银行等。另外，蚂蚁金服也与投资控股的公司及关联公司一起，在业务和服务层面通力合作，深度整合共推商业生态系统的繁荣。`,
		
		// OFFICE
		officeId: 500,
		office: '金融科技研发专家/工程师', // 职位
		wage: [20000, 40000], // 工资
		degree: "本科", // 学历
		year: 0, // 工作年限
		tag: ['不限', '本科', '分布式系统', '容器化', '微服务'], // 标签		
		content: `<div class="text">
                                    岗位职责：<br>1. 理解业务产品需求和金融科技体系架构，负责对多样的基础设施无缝灵活对接；<br>2. 抓住业务发展趋势，推进整体架构向cloud native方向升级；<br>3. 负责商业化产品的服务支撑、版本管理、交付、运维系统的构建和完善<br>4. 负责构建金融云产品的基础服务、架构体系，具备高可用，低成本和快速迭代能力；<br>职位要求<br>1. 精通一门编程语言，Go或JAVA等<br>2. 精通分布式系统原理，拥有大型的分布式系统的研发、设计、架构、高可用经验<br>3.了解 kubernetes/YARN/Swarm/Mesos/Borg 等主流的调度系统，有实际容器化、微服务化改造经验<br>4.优秀的沟通与协调能力，具备目标设定与执行、项目管理、有效促进他人行动的能力，能够在压力环境下工作<br>5. 有金融类系统的业务和基础架构、企业服务有经验者，优先考虑
                                </div>`,
		officeTag: ['分布式系统', '容器化', '微服务'],
		
		// HR
		hrName: '兰先生', // HR姓名	
		hrImage: hr_company, // HR头像
		hrOffice: '技术支持工程师', // HR职位

	},{
		// COMPANY
		companyId: 101, // 公司Id
		companyName: '蚂蚁金服', // 公司名
		companyImage: company_image, // 公司Logo
		companyBoss:{
			name:"井贤栋",
			image:company_boss_image,
			content:"井贤栋，男，汉族，1994年毕业于上海交通大学管理学院，获得工学学士学位，2005年毕业于明尼苏达大学卡尔森管理学院EMBA，获得明尼苏达大学卡尔森管理学院工商管理硕士学位（MBA）。",
			title:'现任蚂蚁金服董事长，兼任CEO。'
		},
		companyBanner:[company_banner_0,company_banner_1],// 公司广告
		companyPeopNum: 10000, // 公司人数	
		companyAddress: '上海 浦东新区 陆家嘴', // 公司地址
		financing: false, // 是否融资
		marker: [121.50109, 31.23691], // 公司经纬度
		companyContent:`蚂蚁金融服务集团（以下称“蚂蚁金服”）起步于2004年成立的支付宝。2014年10月，蚂蚁金服正式成立。蚂蚁金服以“为世界带来微小而美好的改变”为愿景，致力于打造开放的生态系统，通过“互联网推进器计划”助力金融机构和合作伙伴加速迈向“互联网+”，为小微企业和个人消费者提供普惠金融服务。
					<br>蚂蚁金服集团旗下及相关业务包括生活服务平台支付宝、智慧理财平台蚂蚁聚宝、云计算服务平台蚂蚁金融云、独立第三方信用评价体系芝麻信用以及网商银行等。另外，蚂蚁金服也与投资控股的公司及关联公司一起，在业务和服务层面通力合作，深度整合共推商业生态系统的繁荣。`,
		
		// OFFICE
		officeId: 500,
		office: '金融科技研发专家/工程师', // 职位
		wage: [20000, 40000], // 工资
		degree: "本科", // 学历
		year: 0, // 工作年限
		tag: ['不限', '本科', '分布式系统', '容器化', '微服务'], // 标签		
		content: `<div class="text">
                                    岗位职责：<br>1. 理解业务产品需求和金融科技体系架构，负责对多样的基础设施无缝灵活对接；<br>2. 抓住业务发展趋势，推进整体架构向cloud native方向升级；<br>3. 负责商业化产品的服务支撑、版本管理、交付、运维系统的构建和完善<br>4. 负责构建金融云产品的基础服务、架构体系，具备高可用，低成本和快速迭代能力；<br>职位要求<br>1. 精通一门编程语言，Go或JAVA等<br>2. 精通分布式系统原理，拥有大型的分布式系统的研发、设计、架构、高可用经验<br>3.了解 kubernetes/YARN/Swarm/Mesos/Borg 等主流的调度系统，有实际容器化、微服务化改造经验<br>4.优秀的沟通与协调能力，具备目标设定与执行、项目管理、有效促进他人行动的能力，能够在压力环境下工作<br>5. 有金融类系统的业务和基础架构、企业服务有经验者，优先考虑
                                </div>`,
		officeTag: ['分布式系统', '容器化', '微服务'],
		
		// HR
		hrName: '兰先生', // HR姓名	
		hrImage: hr_company, // HR头像
		hrOffice: '技术支持工程师', // HR职位

	},{
		// COMPANY
		companyId: 102, // 公司Id
		companyName: '蚂蚁金服', // 公司名
		companyImage: company_image, // 公司Logo
		companyBoss:{
			name:"井贤栋",
			image:company_boss_image,
			content:"井贤栋，男，汉族，1994年毕业于上海交通大学管理学院，获得工学学士学位，2005年毕业于明尼苏达大学卡尔森管理学院EMBA，获得明尼苏达大学卡尔森管理学院工商管理硕士学位（MBA）。",
			title:'现任蚂蚁金服董事长，兼任CEO。'
		},
		companyBanner:[company_banner_0,company_banner_1],// 公司广告
		companyPeopNum: 10000, // 公司人数	
		companyAddress: '上海 浦东新区 陆家嘴', // 公司地址
		financing: false, // 是否融资
		marker: [121.50109, 31.23691], // 公司经纬度
		companyContent:`蚂蚁金融服务集团（以下称“蚂蚁金服”）起步于2004年成立的支付宝。2014年10月，蚂蚁金服正式成立。蚂蚁金服以“为世界带来微小而美好的改变”为愿景，致力于打造开放的生态系统，通过“互联网推进器计划”助力金融机构和合作伙伴加速迈向“互联网+”，为小微企业和个人消费者提供普惠金融服务。
					<br>蚂蚁金服集团旗下及相关业务包括生活服务平台支付宝、智慧理财平台蚂蚁聚宝、云计算服务平台蚂蚁金融云、独立第三方信用评价体系芝麻信用以及网商银行等。另外，蚂蚁金服也与投资控股的公司及关联公司一起，在业务和服务层面通力合作，深度整合共推商业生态系统的繁荣。`,
		
		// OFFICE
		officeId: 500,
		office: '金融科技研发专家/工程师', // 职位
		wage: [20000, 40000], // 工资
		degree: "本科", // 学历
		year: 0, // 工作年限
		tag: ['不限', '本科', '分布式系统', '容器化', '微服务'], // 标签		
		content: `<div class="text">
                                    岗位职责：<br>1. 理解业务产品需求和金融科技体系架构，负责对多样的基础设施无缝灵活对接；<br>2. 抓住业务发展趋势，推进整体架构向cloud native方向升级；<br>3. 负责商业化产品的服务支撑、版本管理、交付、运维系统的构建和完善<br>4. 负责构建金融云产品的基础服务、架构体系，具备高可用，低成本和快速迭代能力；<br>职位要求<br>1. 精通一门编程语言，Go或JAVA等<br>2. 精通分布式系统原理，拥有大型的分布式系统的研发、设计、架构、高可用经验<br>3.了解 kubernetes/YARN/Swarm/Mesos/Borg 等主流的调度系统，有实际容器化、微服务化改造经验<br>4.优秀的沟通与协调能力，具备目标设定与执行、项目管理、有效促进他人行动的能力，能够在压力环境下工作<br>5. 有金融类系统的业务和基础架构、企业服务有经验者，优先考虑
                                </div>`,
		officeTag: ['分布式系统', '容器化', '微服务'],
		
		// HR
		hrName: '兰先生', // HR姓名	
		hrImage: hr_company, // HR头像
		hrOffice: '技术支持工程师', // HR职位

	},{
		// COMPANY
		companyId: 103, // 公司Id
		companyName: '蚂蚁金服', // 公司名
		companyImage: company_image, // 公司Logo
		companyBoss:{
			name:"井贤栋",
			image:company_boss_image,
			content:"井贤栋，男，汉族，1994年毕业于上海交通大学管理学院，获得工学学士学位，2005年毕业于明尼苏达大学卡尔森管理学院EMBA，获得明尼苏达大学卡尔森管理学院工商管理硕士学位（MBA）。",
			title:'现任蚂蚁金服董事长，兼任CEO。'
		},
		companyBanner:[company_banner_0,company_banner_1],// 公司广告
		companyPeopNum: 10000, // 公司人数	
		companyAddress: '上海 浦东新区 陆家嘴', // 公司地址
		financing: false, // 是否融资
		marker: [121.50109, 31.23691], // 公司经纬度
		companyContent:`蚂蚁金融服务集团（以下称“蚂蚁金服”）起步于2004年成立的支付宝。2014年10月，蚂蚁金服正式成立。蚂蚁金服以“为世界带来微小而美好的改变”为愿景，致力于打造开放的生态系统，通过“互联网推进器计划”助力金融机构和合作伙伴加速迈向“互联网+”，为小微企业和个人消费者提供普惠金融服务。
					<br>蚂蚁金服集团旗下及相关业务包括生活服务平台支付宝、智慧理财平台蚂蚁聚宝、云计算服务平台蚂蚁金融云、独立第三方信用评价体系芝麻信用以及网商银行等。另外，蚂蚁金服也与投资控股的公司及关联公司一起，在业务和服务层面通力合作，深度整合共推商业生态系统的繁荣。`,
		
		// OFFICE
		officeId: 500,
		office: '金融科技研发专家/工程师', // 职位
		wage: [20000, 40000], // 工资
		degree: "本科", // 学历
		year: 0, // 工作年限
		tag: ['不限', '本科', '分布式系统', '容器化', '微服务'], // 标签		
		content: `<div class="text">
                                    岗位职责：<br>1. 理解业务产品需求和金融科技体系架构，负责对多样的基础设施无缝灵活对接；<br>2. 抓住业务发展趋势，推进整体架构向cloud native方向升级；<br>3. 负责商业化产品的服务支撑、版本管理、交付、运维系统的构建和完善<br>4. 负责构建金融云产品的基础服务、架构体系，具备高可用，低成本和快速迭代能力；<br>职位要求<br>1. 精通一门编程语言，Go或JAVA等<br>2. 精通分布式系统原理，拥有大型的分布式系统的研发、设计、架构、高可用经验<br>3.了解 kubernetes/YARN/Swarm/Mesos/Borg 等主流的调度系统，有实际容器化、微服务化改造经验<br>4.优秀的沟通与协调能力，具备目标设定与执行、项目管理、有效促进他人行动的能力，能够在压力环境下工作<br>5. 有金融类系统的业务和基础架构、企业服务有经验者，优先考虑
                                </div>`,
		officeTag: ['分布式系统', '容器化', '微服务'],
		
		// HR
		hrName: '兰先生', // HR姓名	
		hrImage: hr_company, // HR头像
		hrOffice: '技术支持工程师', // HR职位

	},{
		// COMPANY
		companyId: 104, // 公司Id
		companyName: '蚂蚁金服', // 公司名
		companyImage: company_image, // 公司Logo
		companyBoss:{
			name:"井贤栋",
			image:company_boss_image,
			content:"井贤栋，男，汉族，1994年毕业于上海交通大学管理学院，获得工学学士学位，2005年毕业于明尼苏达大学卡尔森管理学院EMBA，获得明尼苏达大学卡尔森管理学院工商管理硕士学位（MBA）。",
			title:'现任蚂蚁金服董事长，兼任CEO。'
		},
		companyBanner:[company_banner_0,company_banner_1],// 公司广告
		companyPeopNum: 10000, // 公司人数	
		companyAddress: '上海 浦东新区 陆家嘴', // 公司地址
		financing: false, // 是否融资
		marker: [121.50109, 31.23691], // 公司经纬度
		companyContent:`蚂蚁金融服务集团（以下称“蚂蚁金服”）起步于2004年成立的支付宝。2014年10月，蚂蚁金服正式成立。蚂蚁金服以“为世界带来微小而美好的改变”为愿景，致力于打造开放的生态系统，通过“互联网推进器计划”助力金融机构和合作伙伴加速迈向“互联网+”，为小微企业和个人消费者提供普惠金融服务。
					<br>蚂蚁金服集团旗下及相关业务包括生活服务平台支付宝、智慧理财平台蚂蚁聚宝、云计算服务平台蚂蚁金融云、独立第三方信用评价体系芝麻信用以及网商银行等。另外，蚂蚁金服也与投资控股的公司及关联公司一起，在业务和服务层面通力合作，深度整合共推商业生态系统的繁荣。`,
		
		// OFFICE
		officeId: 500,
		office: '金融科技研发专家/工程师', // 职位
		wage: [20000, 40000], // 工资
		degree: "本科", // 学历
		year: 0, // 工作年限
		tag: ['不限', '本科', '分布式系统', '容器化', '微服务'], // 标签		
		content: `<div class="text">
                                    岗位职责：<br>1. 理解业务产品需求和金融科技体系架构，负责对多样的基础设施无缝灵活对接；<br>2. 抓住业务发展趋势，推进整体架构向cloud native方向升级；<br>3. 负责商业化产品的服务支撑、版本管理、交付、运维系统的构建和完善<br>4. 负责构建金融云产品的基础服务、架构体系，具备高可用，低成本和快速迭代能力；<br>职位要求<br>1. 精通一门编程语言，Go或JAVA等<br>2. 精通分布式系统原理，拥有大型的分布式系统的研发、设计、架构、高可用经验<br>3.了解 kubernetes/YARN/Swarm/Mesos/Borg 等主流的调度系统，有实际容器化、微服务化改造经验<br>4.优秀的沟通与协调能力，具备目标设定与执行、项目管理、有效促进他人行动的能力，能够在压力环境下工作<br>5. 有金融类系统的业务和基础架构、企业服务有经验者，优先考虑
                                </div>`,
		officeTag: ['分布式系统', '容器化', '微服务'],
		
		// HR
		hrName: '兰先生', // HR姓名	
		hrImage: hr_company, // HR头像
		hrOffice: '技术支持工程师', // HR职位

	}]
}

console.log(recom_company)

export default recom_company
