---
layout: page
permalink: /blogs/
title: blogs
description: notes, readings, and project logs.
nav: true
nav_order: 1
---

<div class="blog-interface">
  {% for group in site.data.blogs.groups %}
    <section class="blog-group">
      <h2>{{ group.title }}</h2>
      <ul class="blog-entry-list">
        {% for entry in group.entries %}
          <li class="blog-entry-item">
            <div class="blog-entry-main">
              {% if entry.url %}
                <a class="blog-entry-title" href="{{ entry.url | relative_url }}">{{ entry.title }}</a>
              {% else %}
                <span class="blog-entry-title">{{ entry.title }}</span>
              {% endif %}
              <p class="blog-entry-description">{{ entry.description }}</p>
            </div>
            <span class="blog-entry-date">{{ entry.date }}</span>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>
