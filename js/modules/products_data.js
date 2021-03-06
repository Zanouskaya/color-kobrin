export const productsList = [
  {
    id: "p_belosnezhka",
    type: "paint",
    category: "Краска",
    name: "Белоснежка",
    description:
      "Применяется для покрытия внутренних стен и потолков жилых, подвальных помещений по кирпичным, бетонным, оштукатуренным поверхностям а также ДСП, ДВП, гипсокартону.",
    image: "/images/belosnezhka.png",
    imageAlt: "Краска для внетренних работ Белоснежка",
    tags: "for-indoor ceiling living-room basement brick concrete DSP plaster drywall",
    link: "belosnezhka",
  },
  {
    id: "p_fasadnaya",
    type: "paint",
    category: "Краска",
    name: "Фасадная",
    description:
      "Применяется для наружных покрытий по минеральной основе (штукатурка, бетон, кирпич)и для внутренних работ в помещениях с более активной химической средой.",
    image: "/images/fasadnaya.png",
    imageAlt: "Краска для наружних работ Фасадная",
    tags: "for-outdoor plaster brick concrete with-active-chemical-environment",
    link: "fasadnaya",
  },
  {
    id: "p_fasadnaya_silikonovaya",
    type: "paint",
    category: "Краска",
    name: "Фасадная силиконовая",
    description:
      "Рекомендуется для ремонта старых, не утративших несущей способности штукатурок, в том числе на основе искусственных смол,а также покрытий, выполненных минеральными силикатными материалами.",
    image: "/images/f_silikonovaya.png",
    imageAlt: "Краска для наружних работ Фасадная силиконовая",
    tags: "old-plaster silicate",
    link: "fasadnaya_silikon",
  },
  {
    id: "p_fasadnaya_silikatnaya",
    type: "paint",
    category: "Краска",
    name: "Фасадная силикатная",
    description:
      "Особо рекомендуется для ремонта старых, не утративших несущей способности штукатурок, в том числе на основе искусственных смол, а также покрытий, выполненных разнородными минеральными и силикатными материалами.",
    image: "/images/f_silikatnaya.png",
    imageAlt: "Краска для наружних работ Фасадная силикатная",
    tags: "old-plaster silicate",
    link: "fasadnaya_silikat",
  },

  {
    id: "p_dahavaya",
    type: "paint",
    category: "Краска",
    name: "Дахавая",
    description:
      "Для окраски шифера и цементно-песчаной черепицы с углом наклона не менее 45. Рекомендуется использовать для окраски минеральных оснований подвергаемых повышенным нагрузкам.",
    image: "/images/dahavaya.png",
    imageAlt: "Краска для шифера и черепицы Дахавая",
    tags: "slate",
    link: "dahavaya",
  },
  {
    id: "p_evrostar",
    type: "paint",
    category: "Краска",
    name: "Евростар",
    description:
      "Применяется для покрытия внутренних стен и потолков жилых, подвальных помещений по кирпичным, бетонным, оштукатуренным поверхностям а также ДСП, ДВП, гипсокартону.",
    image: "/images/evrostar.png",
    imageAlt: "Краска для стен и потолков Евростар",
    tags: "for-indoor living-room ceiling basement brick concrete DSP plaster drywall",
    link: "evrostar",
  },
  {
    id: "p_master",
    type: "paint",
    category: "Краска",
    name: "Мастер",
    description:
      "Применяется для наружных и внутренних покрытий по натуральной древесине, минеральной основе (штукатурка, бетон, кирпич), ДСП, ДВП, гипсокартону, обоям.",
    image: "/images/master.png",
    imageAlt: "Краска по дереву Мастер",
    tags: "for-outdoor for-indoor living-room for-wood wallpaper DSP plaster brick concrete",
    link: "master",
  },
  // {
  //   id: "p_master_m",
  //   type: "paint",
  //   category: "Краска",
  //   name: "Мастер-М",
  //   description:
  //     "Применяется для наружных и внутренних покрытий по натуральной древесине, минеральной основе (штукатурка, бетон, кирпич), ДСП, ДВП, гипсокартону, обоям.",
  //   image: "/images/master_m.png",
  //   tags: "for-outdoor for-indoor living-room for-wood wallpaper DSP plaster brick concrete",
  //   link: "/master_m.html",
  // },

  {
    id: "pt_np1ps",
    type: "putty",
    category: "Шпатлевка",
    name: "НП 1 ПС",
    description:
      "Предназначена для выравнивания дефектов поверхностей (для наружных работ)",
    image: "/images/np1ps.png",
    imageAlt: "Шпатлевка для наружных работ",
    tags: "for-outdoor for-leveling-the-surface",
    link: "np1ps",
  },
  {
    id: "pt_vp1ps",
    type: "putty",
    category: "Шпатлевка",
    name: "ВП 1 ПС",
    description:
      "Предназначена для выравнивания дефектов поверхностей (для внутренних работ)",
    image: "/images/vp1ps.png",
    imageAlt: "Шпатлевка для внутренних работ",
    tags: "for-indoor living-room for-leveling-the-surface",
    link: "vp1ps",
  },
  // {
  //   id: "pl_inraib_vp1ps",
  //   type: "plasters",
  //   category: "Штукатурка",
  //   name: "Инрайб Путц ВП 1 ПС",
  //   description:
  //     "Предназначена для выполнения высококачественных наружных и внутренних штукатурных работ на минеральных основаниях (бетон, кирпич, минеральная штукатурка, пенобетон), а также по гипсокартону, ДВП, ДСП с целью придания декоративной структуры ( «короед», «под шубу»).",
  //   image: "/images/inraib_vp1ps.png",
  //   tags: "for-indoor plaster brick concrete coroed DSP drywall decorative-plaster",
  //   link: "./inraib_vp1ps.html",
  // },
  {
    id: "pl_kratc_np1ps",
    type: "plasters",
    category: "Штукатурка",
    name: "Кратц Путц НП 1 ПС",
    description:
      "Предназначена для выполнения высококачественных наружных и внутренних штукатурных работ на минеральных основаниях (бетон, кирпич, минеральная штукатурка, пенобетон), а также по гипсокартону, ДВП, ДСП с целью придания декоративной структуры ( «короед», «под шубу»).",
    image: "/images/kratc_np1ps.png",
    imageAlt: "Штукатурка для наружных и внутренних работ",
    tags: "for-outdoor plaster brick concrete coroed DSP drywall decorative-plaster",
    link: "kratc_np1ps",
  },
  {
    id: "pl_raibe_np1ps",
    type: "plasters",
    category: "Штукатурка",
    name: "Райбе Путц НП 1 ПС",
    description:
      "Предназначена для выполнения высококачественных наружных и внутренних штукатурных работ на минеральных основаниях (бетон, кирпич, минеральная штукатурка, пенобетон), а также по гипсокартону, ДВП, ДСП с целью придания декоративной структуры ( «короед», «под шубу»).",
    image: "/images/raibe_np1ps.png",
    imageAlt: "Штукатурка для наружных и внутренних работ",
    tags: "for-outdoor plaster brick concrete coroed DSP drywall decorative-plaster",
    link: "raibe_np1ps",
  },
  {
    id: "pr_lf_indoor",
    type: "primers",
    category: "Грунтовка",
    name: "ЛФ для внутренних работ",
    description:
      "Глубокого проникновения, бесцветная, прозрачная при высыхании.",
    image: "/images/lf_indoor.png",
    imageAlt: "Грунтовка для внутренних работ",
    tags: "for-indoor living-room",
    link: "lf_indoor",
  },
  {
    id: "pr_lf_outdoor",
    type: "primers",
    category: "Грунтовка",
    name: "ЛФ для наружных и внутренних работ",
    description:
      "Глубокого проникновения, бесцветная, прозрачная при высыхании.",
    image: "/images/lf_outdoor.png",
    imageAlt: "Грунтовка для внутренних и наружных работ",
    tags: "for-indoor living-room for-outdoor concrete",
    link: "lf_outdoor",
  },
  {
    id: "pr_shf_concrete",
    type: "primers",
    category: "Грунтовка",
    name: "ШФ Бетон-контакт",
    description:
      "Глубокого проникновения, бесцветная, прозрачная при высыхании.",
    image: "/images/shf_concrete.png",
    imageAlt: "Грунтовка по бетонным поверхностям",
    tags: "for-indoor for-outdoor concrete",
    link: "shf_concrete",
  },
  {
    id: "pr_lf",
    type: "primers",
    category: "Грунтовка",
    name: "ЛФ",
    description:
      "Для наружных и внутренних работ по минеральным поверхностям (штукатурка, бетон, кирпич, асбоцемент) а также гипсокартону, ДСП, ДВП.",
    image: "/images/lf.png",
    imageAlt: "Грунтовка для внутренних и наружных работ",
    tags: "for-indoor for-outdoor concrete brick plaster DSP",
    link: "grunt_lf",
  },
  {
    id: "az_laquer",
    type: "azure",
    category: "Лак",
    name: "Лазурь",
    description:
      "Для декоративной отделки (под ценные породы) и защиты изделий из натуральной древесины снаружи и внутри помещений, по минеральным основаниям и камню.",
    image: "/images/laquer.png",
    imageAlt: "Лак для древесины снаружи и внутри помещения",
    tags: "for-indoor for-outdoor concrete brick plaster DSP for-wood",
    link: "azure",
  },
  // {
  //   id: "gl_klej",
  //   type: "glue",
  //   category: "Клей",
  //   name: "Клей для потолочных изделий",
  //   description:
  //     "Быстросхватывающийся клей для быстрой и экономичной отделки (облицовки) потолков декоративными панелями, плинтусами из пенополистирола, для изделий из пенопласта, полиуретана.",
  //   image: "/images/klej.png",
  //   tags: "for-indoor ceiling",
  //   link: "./klej.html",
  // },
  {
    id: "p_pasta",
    type: "coloring",
    category: "Краситель",
    name: "Паста-краситель",
    description:
      "Предназначен для придания водно-дисперсионным краскам (для наружных и внутренних работ) различных цветов. Допускается окрашивание поверхности чистым красителем.",
    image: "/images/pasta.png",
    imageAlt: "Краситель для водно-дисперсионных красок",
    tags: "for-indoor ceiling living-room basement brick concrete DSP plaster drywall",
    link: "pasta",
  },
];
